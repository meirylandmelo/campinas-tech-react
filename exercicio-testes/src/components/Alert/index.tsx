interface AlertProps {
  message: string;
  show: boolean;
}

const Alert = ({ message, show }: AlertProps) =>
  show ? (
    <div>
      <p className="alert" data-testid="myAlert">
        {message}
      </p>
    </div>
  ) : null;

export default Alert;
