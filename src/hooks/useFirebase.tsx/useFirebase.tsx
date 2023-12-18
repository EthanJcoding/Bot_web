'use client'

import getGameData from '@/firebase/getGameData/getGameData'
import { Interfaces } from '@/utils'
import { useState, useEffect } from 'react'

const useFirebase = (guildId: string, gameId: string) => {
  const [data, setData] = useState<Interfaces.Game | { data: never[] }>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGameData(guildId, gameId)
        setData(response.props)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [gameId, guildId])

  return { data, loading, error }
}

export default useFirebase
