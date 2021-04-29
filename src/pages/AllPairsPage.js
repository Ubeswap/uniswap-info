import 'feather-icons'

import React, { useEffect, useState } from 'react'
import { useMedia } from 'react-use'

import { FullWrapper, PageWrapper } from '../components'
import CheckBox from '../components/Checkbox'
import PairList from '../components/PairList'
import Panel from '../components/Panel'
import QuestionHelper from '../components/QuestionHelper'
import { AutoRow, RowBetween } from '../components/Row'
import Search from '../components/Search'
import { useAllPairData } from '../contexts/PairData'
import { TYPE } from '../Theme'

function AllPairsPage() {
  const allPairs = useAllPairData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below800 = useMedia('(max-width: 800px)')

  const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Pairs</TYPE.largeHeader>
          {!below800 && <Search small={true} />}
        </RowBetween>
        <AutoRow gap="4px">
          <CheckBox checked={useTracked} setChecked={() => setUseTracked(!useTracked)} text={'Hide unstable pairs'} />
          <QuestionHelper text="USD amounts may be inaccurate in low liquidity pairs or pairs without stablecoins." />
        </AutoRow>
        <Panel style={{ padding: below800 && '1rem 0 0 0 ' }}>
          <PairList pairs={allPairs} disbaleLinks={true} maxItems={50} useTracked={useTracked} />
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllPairsPage
