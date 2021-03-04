interface AlertProps {
  message: string;
  show: boolean;
}

const Alert = ({ message, show }: AlertProps) =>
  show ? (
    <div>
      <p data-testid="myAlert">{message}</p>
    </div>
  ) : null;

export default Alert;
