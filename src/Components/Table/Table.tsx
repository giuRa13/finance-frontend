type Props = {
    data: any;
    config: any;
}



const Table = ({data, config}: Props) => {
    const renderRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return (
                        <td className='p-4 whitespace-nowrap text-sm text-darkgrey
                        font-normal'>
                            {val.render(company)}
                        </td>
                    );
            })}
                <td className='p-4 whitespace-nowrap text-sm text-darkgrey2
                font-normal'>                  
                </td>
            </tr>
        );
    });

const renderHeader = config.map((configs:any)=> {
    return (
        <th key={configs.label}
        className='p-4 text-left text-xs font-medium text-blue2 uppercase tracking-wider'
        >
            {configs.label}
        </th>
    )
})



  return (
    <div className='shadow rounded-lg p-4 sm:p-6 xl:p-8'>
        <table className='min-w-full divide-y divide=blue2 m-5'>
            <thead className="bg-gray-50 w-full">
                {renderHeader}
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    </div>
  )
}


export default Table