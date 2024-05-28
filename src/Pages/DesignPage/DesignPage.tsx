import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Design Page</h1>
        <h2>this is Wave Finance's Desingn Page</h2>
        <RatioList/>
        <Table/>
    </>
  )
}

export default DesignPage