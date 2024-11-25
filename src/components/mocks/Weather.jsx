const Weather = () => {
    return (
        <div className="flex gap-[15px]">
            <div className="flex w-2/3 flex-col gap-5">
                <div className="h-[175px] w-full rounded-lg bg-primary/10"></div>
                <div className="h-[207px] w-full rounded-lg bg-primary/10"></div>
            </div>
            <div className="w-1/3">
                <div className="h-[402px] w-full rounded-lg bg-primary/10"></div>
            </div>
        </div>
    )
}

export default Weather
