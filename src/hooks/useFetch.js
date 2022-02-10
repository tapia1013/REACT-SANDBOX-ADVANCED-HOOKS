import { useState, useEffect } from 'react';


function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchcData = async () => {
      try {
        const response = await fetch(url, options)
        const data = await response.json()

        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchcData()
    // esline-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { loading, data, error }
}

export default useFetch