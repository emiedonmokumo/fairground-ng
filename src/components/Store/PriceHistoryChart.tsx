'use client';
import formatPrice from '@/utils/formatPrice';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-300 p-2 rounded shadow-sm">
                <p className="text-sm font-bold">{label}</p>
                <p className="text-sm">{`Price: ${formatPrice(payload[0].value)}`}</p>
            </div>
        );
    }
    return null;
};

const PriceHistoryChart = ({ priceHistory }: { priceHistory: { date: string; price: number }[] }) => {
    // Sort the data by date in ascending order
    const sortedPriceHistory = [...priceHistory].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Get the first price
    const firstPrice = sortedPriceHistory.length > 0 ? sortedPriceHistory[0].price : 0;

    return (
        <ResponsiveContainer width="100%" height={400} className={'font-montserrat'}>
            <AreaChart
                data={sortedPriceHistory}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    tickFormatter={(date) => new Date(date).getFullYear().toString()} // Format X-axis ticks to show only the year
                    interval="preserveStartEnd" // Ensure proper spacing even with repetitive data
                    className="text-xs"
                />
                <YAxis domain={[firstPrice, 'auto']} tickFormatter={(value) => formatPrice(value)} className="text-xs" />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default PriceHistoryChart;
