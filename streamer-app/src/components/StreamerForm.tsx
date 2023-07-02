import axios from 'axios';
import { useState } from 'react';
import { baseURLStreamers, platforms } from '../utils/const';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
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
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
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
      .catch((error) => console.error(error))
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
        margin: '10px 0 10px 24px',
        backgroundColor: baseTheme.palette.primary.light,
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
        <InputLabel
          id="platform"
          sx={{
            color:
              formik.touched.platform && formik.errors.platform
                ? baseTheme.palette.error.main
                : baseTheme.palette.secondary.main,
          }}
        >
          Platform
        </InputLabel>
        <Select
          id="platform"
          name="platform"
          label="Platform"
          value={formik.values.platform}
          onChange={handleChange}
          error={Boolean(formik.touched.platform && formik.errors.platform)}
        >
          {platforms.map((platform, index) => (
            <MenuItem key={index} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.platform && formik.errors.platform ? (
          <FormHelperText sx={{ color: '#d32f2f', marginLeft: '16px' }}>
            {formik.touched.platform && formik.errors.platform}
          </FormHelperText>
        ) : null}
      </FormControl>
      <TextField
        multiline
        rows={4}
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
