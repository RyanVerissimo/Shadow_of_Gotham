const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();
    
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: 'Preencha todos os campos.'});
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, email, hashedPassword, role], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Erro ao registrar usuário.'});
            }
            res.status(201).json({ message: 'Usuário registrado com sucesso!'});
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro interno no servidor.'});
    }
});

router.get('/users', (req, res) => {
    const sql = 'SELECT id, name, email, role, created_at FROM users'; 

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao buscar usuários.' });
        }
        res.json(results);
    });
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT id, name, email, role, created_at FROM users WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.json(results[0]);
    });
});

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    try {
        let sql, values;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            sql = 'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?';
            values = [name, email, hashedPassword, role, id];
        } else {
            sql = 'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?';
            values = [name, email, role, id];
        }

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.json({ message: 'Usuário atualizado com sucesso!' });
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao deletar usuário.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.json({ message: 'Usuário deletado com sucesso!' });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Login bem-sucedido!', token, role: user.role });
    });
});

module.exports = router;