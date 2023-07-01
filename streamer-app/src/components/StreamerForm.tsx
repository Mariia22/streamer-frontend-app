import axios from 'axios';
import { useState } from 'react';
import { baseURLStreamers, platforms } from '../utils/const';
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validationSchema';
import { baseTheme } from '../style/theme';

const StreamerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  function handleSubmit(values: any) {
    setIsLoading(true);
    axios
      .post(baseURLStreamers, {
        name: values.name,
        platform: values.platform,
        description: values.description,
      })
      .finally(() => setIsLoading(false));
  }

  function handleChange(event: SelectChangeEvent) {
    setValue(event.target.value);
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
        padding: '20px',
        margin: '10px',
        border: `1px solid ${baseTheme.palette.primary.contrastText}`,
      }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        sx={{ border: '1px solid #621DED', color: 'primary.light' }}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Select
        fullWidth
        id="platform"
        value={value}
        sx={{ border: '1px solid #621DED', margin: '20px 0', color: 'primary.light' }}
        label="Platform"
        onChange={handleChange}
      >
        {platforms.map((platform, index) => (
          <MenuItem key={index}>{platform}</MenuItem>
        ))}
      </Select>
      <TextField
        multiline={true}
        fullWidth
        id="description"
        name="description"
        label="Description"
        sx={{ border: '1px solid #621DED', color: 'primary.light' }}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Button
        type="submit"
        disabled={isLoading}
        sx={{
          backgroundColor: 'secondary.main',
          marginTop: '20px',
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default StreamerForm;
