import type { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="status status-error" role="alert">
      <p>Något gick fel när sidan skulle visas.</p>
      <button onClick={resetErrorBoundary}>Försök igen</button>
    </div>
  )
}

export default ErrorFallback