import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import api from '../../utils/api';
import { useRouter } from 'next/router';

export default function CreateCase() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    difficulty: 'beginner',
    specialization: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('token');
      await api.post('/cases', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Case created successfully!');
      setForm({ title: '', description: '', difficulty: 'beginner', specialization: '' });
      setTimeout(() => router.push('/cases'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create case');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Create Medical Case</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="Title" name="title" fullWidth margin="normal" value={form.title} onChange={handleChange} required />
          <TextField label="Description" name="description" fullWidth margin="normal" multiline rows={4} value={form.description} onChange={handleChange} required />
          <TextField label="Specialization" name="specialization" fullWidth margin="normal" value={form.specialization} onChange={handleChange} required />
          <TextField
            select
            label="Difficulty"
            name="difficulty"
            fullWidth
            margin="normal"
            value={form.difficulty}
            onChange={handleChange}
            SelectProps={{ native: true }}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </TextField>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Create Case</Button>
        </form>
      </Box>
    </Container>
  );
}
