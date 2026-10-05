interface StatusMessageProps {
  variant: "loading" | "error" | "empty"
  message: string
  onRetry?: () => void
}

const StatusMessage = ({ variant, message, onRetry }: StatusMessageProps) => {
  return (
    <div className={"status status-" + variant}>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Försök igen</button>}
    </div>
  )
}

export default StatusMessage