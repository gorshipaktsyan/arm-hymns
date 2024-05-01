import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfirmModal({
  handleClearHistory,
  setOpenConfirm,
  openConfirm,
}) {
  return (
    <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
      <DialogContent>
        <DialogContentText sx={{ color: "black" }}>
          Իսկապե՞ս ուզում եք ջնջել ձեր ամբողջ պատմությունը?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpenConfirm(false)}>
          ոչ
        </Button>
        <Button onClick={handleClearHistory} autoFocus>
          այո
        </Button>
      </DialogActions>
    </Dialog>
  );
}
