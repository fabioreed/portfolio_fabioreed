import { Bar } from 'react-chartjs-2'

const TechnologiesChart = ({ projects }: any ) => {
  // Contar o número de vezes que cada tecnologia foi utilizada
  const technologiesCount = projects.reduce((count: any, project: any) => {
    project.technologies.forEach((technology: string | number) => {
      count[technology] = (count[technology] || 0) + 1
    })

    return count
  }, {})

  // Extrair as tecnologias e contagens em arrays separados
  const labels = Object.keys(technologiesCount)
  const data = Object.values(technologiesCount)

  // Definir as opções de configuração do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
      },
    },
  }

  // Definir os dados do gráfico
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Tecnologias',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  return (
    <div>
      <h2>Tecnologias mais utilizadas</h2>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default TechnologiesChart