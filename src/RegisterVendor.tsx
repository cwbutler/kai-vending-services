import React from 'react';
import {
  Button, Checkbox, Container, FormControl, FormControlLabel, InputLabel,
  MenuItem, Paper, Select, Stack, TextField, Typography
} from '@mui/material';
import useVendorStore from './store/vendor';

function RegisterVendor() {

  return (
    <Paper elevation={3} sx={{ padding: "20px" }}>
      <Container maxWidth="sm">
        <Stack alignItems="center">
          <Typography variant="h4" align="center" sx={{ mb: "16px" }}>
            Vendor Registration Form
          </Typography>
          
          <RegisterVendorForm />

          <Button variant="contained" sx={{ width: "180px", mt: "16px" }}>
            Submit Vendor
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
}

function RegisterVendorForm() {
  const textFieldStyle = { mb: "16px" };
  const { newVendor, updateNewVendor } = useVendorStore();

  return (
    <Stack>
      <TextField
        label="Business Name"
        sx={textFieldStyle}
        autoFocus
        value={newVendor.name}
        onChange={(e) => updateNewVendor({ name: e.target.value })}
      />

      <TextField
        label="Website"
        sx={textFieldStyle}
        value={newVendor.website}
        onChange={(e) => updateNewVendor({ website: e.target.value })}
      />

      <TextField
        label="Contact Person"
        sx={textFieldStyle}
        value={newVendor.contact}
        onChange={(e) => updateNewVendor({ contact: e.target.value })}
      />

      <TextField
        label="Position/Title"
        sx={textFieldStyle}
        value={newVendor.title}
        onChange={(e) => updateNewVendor({ title: e.target.value })}
      />

      <TextField
        label="Email"
        sx={textFieldStyle}
        value={newVendor.email}
        onChange={(e) => updateNewVendor({ email: e.target.value })}
      />

      <TextField
        label="Phone Number"
        sx={textFieldStyle}
        value={newVendor.phone}
        onChange={(e) => updateNewVendor({ phone: e.target.value })}
      />

      <FormControlLabel
        control={<Checkbox checked={!!newVendor.isMobile} onChange={(e) => updateNewVendor({ isMobile: e.target.checked })} />}
        label="Mobile Location?"
        sx={textFieldStyle}
      />

      <TextField
        label="Address"
        sx={textFieldStyle}
        value={newVendor.address}
        onChange={(e) => updateNewVendor({ address: e.target.value })}
      />

      <TextField
        label="City"
        sx={textFieldStyle}
        value={newVendor.city}
        onChange={(e) => updateNewVendor({ city: e.target.value })}
      />

      <TextField
        label="State"
        sx={textFieldStyle}
        value={newVendor.state}
        onChange={(e) => updateNewVendor({ state: e.target.value })}
      />

      <TextField
        label="Country"
        sx={textFieldStyle}
        value={newVendor.country}
        onChange={(e) => updateNewVendor({ country: e.target.value })}
      />

      <TextField
        label="Zip Code"
        sx={textFieldStyle}
        value={newVendor.zipcode}
        onChange={(e) => updateNewVendor({ zipcode: Number(e.target.value) })}
      />

      <TextField
        label="Years in Business"
        sx={textFieldStyle}
        value={newVendor.yearsInBusiness}
        onChange={(e) => updateNewVendor({ yearsInBusiness: e.target.value })}
      />

      <TextField
        label="Staff size for events"
        sx={textFieldStyle}
        value={newVendor.sizeOfStaff}
        onChange={(e) => updateNewVendor({ sizeOfStaff: Number(e.target.value) })}
      />

      <FormControl sx={textFieldStyle}>
        <InputLabel id="businessType">Business Type</InputLabel>
        <Select
          labelId="businessType"
          label="Business Type"
          value={newVendor.businessType}
          onChange={(e) => updateNewVendor({ businessType: e.target.value })}
        >
          <MenuItem value="Retail">Retail</MenuItem>
          <MenuItem value="Food & Beverage">Food & Beverage</MenuItem>
          <MenuItem value="Arts & Crafts">Arts & Crafts</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
          <MenuItem value="Services">Services</MenuItem>
          <MenuItem value="Nonprofit">Nonprofit</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={<Checkbox checked={Boolean(newVendor.newVendor)} onChange={(e) => updateNewVendor({ newVendor: e.target.checked })} />}
        label="Have you ever been a vendor?"
        sx={textFieldStyle}
      />

      <TextField
        label="How many years have you been a vendor?"
        sx={textFieldStyle}
        value={newVendor.numOfYearsVending}
        onChange={(e) => updateNewVendor({ numOfYearsVending: Number(e.target.value) })}
      />

      <TextField
        label="Brief description of your product/service"
        sx={textFieldStyle}
        multiline
        rows={5}
        helperText="(Please provide a concise description of what you will be selling or promoting at the event)"
        value={newVendor.productDescription}
        onChange={(e) => updateNewVendor({ productDescription: e.target.value })}
      />

      <TextField
        label="All Social Media Handles"
        sx={textFieldStyle}
        multiline
        rows={2}
        helperText="(Please seperate each social handle with a comma: 'social1, social2, etc')"
        value={newVendor.socialMediaHandles}
        onChange={(e) => updateNewVendor({ socialMediaHandles: e.target.value })}
      />
      
      <TextField
        label="Photos/Portfolio"
        sx={textFieldStyle}
        helperText="Please provide a link or upload samples of your work or products."
      />

      <FormControlLabel control={<Checkbox />} label="Have you obtained your business license?" sx={textFieldStyle} />

      <FormControlLabel
        control={<Checkbox />}
        label="Are you licensed or certified in any specific area related to your business?"
        sx={textFieldStyle}
      />
      <TextField
        label="If yes to above, please provide details."
        sx={textFieldStyle}
        multiline
        rows={3}
        helperText="(Safeserv certificate required for all food vendor)"
      />

      <FormControl sx={textFieldStyle}>
        <InputLabel id="boothSize">Preferred Booth Size</InputLabel>
        <Select labelId="boothSize" label="Preferred Booth Size">
          <MenuItem value="10x10">10x10</MenuItem>
          <MenuItem value="10x20">10x20</MenuItem>
          <MenuItem value="20x20">20x20</MenuItem>
          <MenuItem value="other">Custom (please specify):</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={<Checkbox />}
        label="Do you need access to electricity?"
        sx={textFieldStyle}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Do you need access to water?"
        sx={textFieldStyle}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Do you need access to WiFi?"
        sx={textFieldStyle}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Will you have any special setup requirements?"
        sx={textFieldStyle}
      />
      <TextField
        label="If yes to above, please provide details."
        sx={textFieldStyle}
        multiline
        rows={3}
      />

      <TextField
        label="Availability"
        sx={textFieldStyle}
        multiline
        rows={2}
        helperText="Are there any dates or periods throughout the year when you are unavailable to participate in events? If yes, please provide details"
      />

      <TextField
        label="Preferred Event Types"
        sx={textFieldStyle}
        helperText="Do you have a preference for certain types of events (e.g., weddings, corporate events, festivals)? Please specify."
      />

      <TextField
        label="Languages Spoken"
        sx={textFieldStyle}
        multiline
        rows={2}
        helperText="What languages can you communicate in fluently? (Seperate each by comma: 'spanish, english, etc'"
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Do you have any accessibility considerations or accommodations that need to be taken into account for your participation in events?"
        sx={textFieldStyle}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Are you interested in additional marketing opportunities provided by the event service platform, such as promotional campaigns or advertisements?"
        sx={textFieldStyle}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Do you have liability insurance?"
        sx={textFieldStyle}
      />
      <TextField
        label="If yes, please list the name of your insurer."
        sx={textFieldStyle}
      />

      <FormControl sx={textFieldStyle}>
        <InputLabel id="boothSize">What methods of payment do you accept?</InputLabel>
        <Select labelId="boothSize" multiple value={[]}>
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="credit">Credit Card</MenuItem>
          <MenuItem value="cashapp">Cashapp</MenuItem>
          <MenuItem value="applepay">Apple Pay</MenuItem>
          <MenuItem value="other">Other (please specify):</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default RegisterVendor;
