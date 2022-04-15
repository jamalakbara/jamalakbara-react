import { useEffect } from "react"

const ExternalLink = ({url}) => {
    useEffect(() => {
        window.location.href = url
        
      }, [url]);

  return (
    <div>ExternalLink</div>
  )
}

export default ExternalLink