import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';

export const Notifycation = ({
  showNotification,
  errorMessage,
  setShowNotification,
}) => {
  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  console.log(errorMessage);
  return (
    <>
      <Snackbar
        open={showNotification}
        onClose={handleNotificationClose}
        message="No statistics found for your request"
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </>
  );
};
