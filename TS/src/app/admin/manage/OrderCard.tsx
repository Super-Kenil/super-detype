'use client'
import ReactApexChart from 'react-apexcharts'
import { type ApexOptions } from 'apexcharts'

type OrderCardType = {
  title: string
  change: number
  changeType: string
  color: string
}

const OrderCard = ({ change, changeType, title, color }: OrderCardType) => {
  const chartOpts: ApexOptions = {
    chart: {
      type: 'bar',
      height: 80,
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        columnWidth: '90%',
        borderRadius: 7,
      },
    },
    colors: [color],
    series: [{ data: [45, 80] }],
    labels: ['1', '2'],
    xaxis: { crosshairs: { width: 4 } },
    tooltip: {
      theme: 'dark',
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function (o) {
            return ''
          },
        },
      },
      marker: { show: false },
    },
  }
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-4">
        <h5 className="mb-6 text-lg font-semibold text-default-900">{title}</h5>
        <div className="flex items-center justify-center gap-4">
          <div className="w-1/4">
            <ReactApexChart className="apex-charts" options={chartOpts} height={80} series={chartOpts.series} type="bar" />
            <div id="new_order" data-colors="#009400" />
          </div>
          <div className="w-4/5">
            <p className="text-sm font-medium text-default-500">{change}% Payment</p>
            <h3 className="text-lg font-medium text-default-950">{changeType}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
