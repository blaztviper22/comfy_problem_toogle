/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
      {
        isSubmitting? (
            <>
                <span className="loading loading-spinner"></span>
                sending...
            </>
        ) : (
                text || 'submit'
        )
      }
      </button>
    </div>
  )
}

export default SubmitBtn
