import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import api from '../../utils/api';
import { useRouter } from 'next/router';

export default function CreateWebinar() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'webinar',
    specialization: 'general',
    scheduledAt: '',
    duration: 30
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('token');
      // Backend expects specialization as array and scheduledAt as ISO string
      const payload = {
        ...form,
        specialization: [form.specialization],
        scheduledAt: new Date(form.scheduledAt).toISOString(),
        duration: Number(form.duration)
      };
      await api.post('/webinars', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Webinar created successfully!');
      setTimeout(() => {
        router.push('/webinars');
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create webinar');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>Create Webinar</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="Title" name="title" fullWidth margin="normal" value={form.title} onChange={handleChange} required />
          <TextField label="Description" name="description" fullWidth margin="normal" value={form.description} onChange={handleChange} required multiline rows={4} />
          <TextField
            select
            label="Type"
            name="type"
            fullWidth
            margin="normal"
            value={form.type}
            onChange={handleChange}
            SelectProps={{ native: true }}
            required
          >
            <option value="webinar">Webinar</option>
            <option value="ama">AMA</option>
            <option value="case-discussion">Case Discussion</option>
            <option value="live-conference">Live Conference</option>
          </TextField>
          <TextField
            select
            label="Specialization"
            name="specialization"
            fullWidth
            margin="normal"
            value={form.specialization}
            onChange={handleChange}
            SelectProps={{ native: true }}
            required
          >
            <option value="general">General</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="oncology">Oncology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="surgery">Surgery</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="radiology">Radiology</option>
            <option value="emergency">Emergency</option>
            <option value="internal-medicine">Internal Medicine</option>
          </TextField>
          <TextField
            label="Scheduled At"
            name="scheduledAt"
            type="datetime-local"
            fullWidth
            margin="normal"
            value={form.scheduledAt}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Duration (minutes)"
            name="duration"
            type="number"
            fullWidth
            margin="normal"
            value={form.duration}
            onChange={handleChange}
            required
            inputProps={{ min: 15, max: 480 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Create Webinar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
