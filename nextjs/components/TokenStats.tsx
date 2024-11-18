export default function TokenStats({tokenData}) {
    return (
    <div className="text-sm space-y-2">
        <div className="flex justify-between">
        <span className="text-cyan-400">Name:</span>
        <span className="text-neon-green">{tokenData.name}</span>
        </div>
        <div className="flex justify-between">
        <span className="text-cyan-400">Ticker:</span>
        <span className="text-neon-green">${tokenData.ticker}</span>
        </div>
        <div className="flex justify-between">
        <span className="text-cyan-400">Price:</span>
        <span className="text-neon-green">{tokenData.price} USD</span>
        </div>
        <div className="flex justify-between">
        <span className="text-cyan-400">Market Cap:</span>
        <span className="text-neon-green">{tokenData.mcap}</span>
        </div>
        <div className="flex justify-between">
        <span className="text-cyan-400">Created:</span>
        <span className="text-neon-green">{tokenData.created}</span>
        </div>
    </div>
    )
}