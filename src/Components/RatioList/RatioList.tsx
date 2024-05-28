
type Props = {
    config: any;
    data: any;
}

const RatioList = ({config, data}: Props) => {
    const renderCells = config.map((row: any) => {
        return (
            <li className='p-3 sm:py-4'>
                <div className='flex items-center justify-between space-x-0 md:space-x-40'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium  text-blue2 truncate'>
                            {row.label}                          
                        </p>
                        <p className='text-sm text.gray-100 truncate'>
                            {row.subTitle && row.subTitle} 
                        </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-black'>
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
        <ul className="divide-y divide-blue2">{renderCells}</ul>
    </div>
  )
}

export default RatioList