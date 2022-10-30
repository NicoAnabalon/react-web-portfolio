import { ReportProblem } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Container } from "../components";
import { EMAIL_REGEX, publicKey, serviceID, templateID } from "../utils";
import emailjs from "@emailjs/browser";
import "./styles.scss";

interface IContactMe {
  isMobile: boolean;
}

interface IContactForm {
  from_name: string;
  to_name: string;
  reply_to: string;
  message: string;
}

export const ContactMe = ({ isMobile }: IContactMe) => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    severity: "success" | "error";
    message: string;
  } | null>(null);

  const handleSendEmail = async (payload: FieldValues) => {
    const { from_name, to_name = "NicoAnabalon", reply_to, message } = payload;
    setSendingEmail(true);
    setAlert(null);
    try {
      await emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name,
            to_name,
            reply_to,
            message,
          },
          publicKey
        )
        .then(
          () => {
            setAlert({
              severity: "success",
              message: "Email sent successfully",
            });
            reset();
          },
          () => {
            setAlert({
              severity: "error",
              message: "There was an error sending the email. Please try again",
            });
          }
        );
    } catch {
      setAlert({
        severity: "error",
        message: "There was an error sending the email. Please try again",
      });
    }
    setSendingEmail(false);
  };

  const handleCloseSnackbar = () => {
    setAlert(null);
  };

  return (
    <Container
      isMobile={isMobile}
      children={
        <Box component="form" className="contact-form" ref={formRef}>
          {alert && (
            <Snackbar
              open={!!alert}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity={alert.severity}>
                {alert.message}
              </Alert>
            </Snackbar>
          )}
          <TextField
            className="text-field"
            id="name"
            label="Name"
            InputProps={{
              endAdornment: errors.from_name ? (
                <Tooltip title={errors.from_name.message ?? "Required field"}>
                  <ReportProblem className="required-field" />
                </Tooltip>
              ) : null,
            }}
            {...register("from_name", {
              required: "Name is required",
            })}
          />
          <TextField
            className="text-field"
            id="email"
            label="Email"
            InputProps={{
              endAdornment: errors.reply_to ? (
                <Tooltip title={errors.reply_to.message ?? "Required field"}>
                  <ReportProblem className="required-field" />
                </Tooltip>
              ) : null,
            }}
            {...register("reply_to", {
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            })}
          />
          <TextField
            className="text-field message"
            id="message"
            label="Message"
            multiline
            InputProps={{
              endAdornment: errors.message ? (
                <Tooltip title={errors.message.message ?? "Required field"}>
                  <ReportProblem className="required-field" />
                </Tooltip>
              ) : null,
            }}
            {...register("message", {
              required: "Message is required",
            })}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={handleSubmit(handleSendEmail)}
            disabled={sendingEmail}
            className="submit-button"
          >
            {sendingEmail ? "Sending..." : "Send Email"}
          </Button>
        </Box>
      }
    />
  );
};
