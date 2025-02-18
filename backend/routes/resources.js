const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM resources';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao buscar recursos.' });
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM resources WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao buscar recurso.' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Recurso não encontrado.' });
        }
        res.json(results[0]);
    });
});

router.post('/', (req, res) => {
    const { name, quantity, classification } = req.body;

    if (!name || !quantity || !classification) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const sql = 'INSERT INTO resources (name, quantity, classification) VALUES (?, ?, ?)';
    db.query(sql, [name, quantity, classification], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao adicionar recurso.' });
        }
        res.status(201).json({ message: 'Recurso adicionado com sucesso!', id: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, quantity, classification } = req.body;

    if (!name || !quantity || !classification) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const sql = 'UPDATE resources SET name = ?, quantity = ?, classification = ? WHERE id = ?';
    db.query(sql, [name, quantity, classification, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao atualizar recurso.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Recurso não encontrado.' });
        }
        res.json({ message: 'Recurso atualizado com sucesso!' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM resources WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao deletar recurso.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Recurso não encontrado.' });
        }
        res.json({ message: 'Recurso deletado com sucesso!' });
    });
});

module.exports = router;
