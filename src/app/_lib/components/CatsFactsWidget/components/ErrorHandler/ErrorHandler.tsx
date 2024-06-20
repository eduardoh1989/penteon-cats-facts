import React from 'react'
import { toast } from 'react-toastify'
import { CatsFactsApiErrors } from '../../constants/errors';
import { CommonErrors } from '@/lib/constants/errors';

interface ErrorHandlerProps {
  status: string;
  error: string;
  fetchStatus: string;
  refetch: () => void;
}

const ErrorHandler = (props: ErrorHandlerProps) => {

  const lastError = React.useRef<string>('')

  const [errorMessage, setErrorMessage] = React.useState('')
  const [showTryAgain, setShowTryAgain] = React.useState(false)

  React.useEffect(() => {
    if (props.status === 'error' || props.fetchStatus === 'paused') {
      manageErrors(props.error, props.fetchStatus)
    } else {
      setShowTryAgain(false)
      setErrorMessage('')
      lastError.current = ''
    }
  }, [props.status, props.fetchStatus])

  const manageErrors = (errorCode: string, fetchStatus: string) => {
    let message = ''
    if (fetchStatus === 'paused') {
      errorCode = CommonErrors.NETWORK_ERROR
    }
    switch (errorCode) {
      case CatsFactsApiErrors.API_ERROR_GENERAL:
        message = 'An error occurred while fetching cats facts, please try again'
        setShowTryAgain(true)
        showToasts(message)
        break;
      case CommonErrors.NETWORK_ERROR:
        message = 'Seems like you are offline, please check your internet connection and try again'
        showToasts(message)
        break;
      case CatsFactsApiErrors.API_ERROR_UNKNOWN:
      default:
        message = 'An unknown error occurred while fetching cats facts, please try again'
        setShowTryAgain(true)
        showToasts(message)
        break;
    }
    setErrorMessage(message)
  }

  const showToasts = (message: string) => {
    if (lastError.current !== message) {
      toast.error(message)
      lastError.current = message
    }
  }

  return (
    <div>
      {errorMessage && (
        <div className="text-red-500 text-center mt-4 p-4 border border-red-500 bg-red-100 rounded-md shadow-md">
          {errorMessage}
        </div>
      )}
      {showTryAgain && (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline"
          onClick={() => props.refetch()}
          disabled={props.fetchStatus === 'fetching'}
        >
          {props.fetchStatus === 'fetching' ? 'Trying again...' : 'Try again'}
        </button>
      )}
    </div>

  );
}

export default ErrorHandler;