import axios from 'axios';
import { useState } from 'react';
import { baseURLStreamers, platforms } from '../utils/const';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { FormikValues, useFormik } from 'formik';
import { validationSchema } from '../utils/validationSchema';
import { baseTheme } from '../style/theme';

const StreamerForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      platform: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  function handleSubmit(values: FormikValues) {
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
    formik.setFieldValue('platform', event.target.value);
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        width: '50%',
        padding: '20px',
        margin: '10px 0 30px 24px',
        border: `3px solid ${baseTheme.palette.primary.contrastText}`,
        borderRadius: '8px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="platform">Platform</InputLabel>
        <Select id="platform" name="platform" label="Platform" value={formik.values.platform} onChange={handleChange}>
          {platforms.map((platform, index) => (
            <MenuItem key={index} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        multiline={true}
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Button type="submit" variant="contained" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default StreamerForm;
