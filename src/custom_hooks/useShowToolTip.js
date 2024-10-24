import {React, useState} from 'react'

const useShowToolTip = () => {
  const [showToolTip, setToolTip] = useState(false);
  return [showToolTip, setToolTip];
}

export default useShowToolTip