import { useState } from 'react';

export default function Dashboard() {
  // Dados mockados para exemplo
  const userStats = {
    totalWeight: 12500,
    completedWorkouts: 48,
    streak: 7,
    level: 15
  };

  const rankings = {
    daily: [
      { name: 'João Silva', points: 150, position: 1 },
      { name: 'Maria Santos', points: 145, position: 2 },
      { name: 'Você', points: 120, position: 3 },
    ],
    monthly: [
      { name: 'Pedro Alves', points: 3200, position: 1 },
      { name: 'Você', points: 2800, position: 2 },
      { name: 'Ana Costa', points: 2600, position: 3 },
    ]
  };

  const notifications = [
    { id: 1, type: 'achievement', message: 'Novo recorde pessoal: Supino 100kg!' },
    { id: 2, type: 'friend', message: 'Carlos começou a seguir você' },
    { id: 3, type: 'challenge', message: 'Novo desafio disponível: 30 dias de treino' }
  ];

  const friendsActivity = [
    { id: 1, name: 'Lucas', activity: 'completou treino de costas', time: '5min atrás' },
    { id: 2, name: 'Amanda', activity: 'bateu recorde no agachamento', time: '15min atrás' },
    { id: 3, name: 'Rafael', activity: 'iniciou treino de peito', time: '30min atrás' }
  ];

  const [selectedRanking, setSelectedRanking] = useState('daily');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header com Logo */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold font-poppins">
            <span className="text-blue-600">Duel</span>
            <span className="text-gray-900">Fit</span>
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500 text-sm font-medium">Carga Total</h3>
            <p className="text-3xl font-bold text-blue-600">{userStats.totalWeight}kg</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500 text-sm font-medium">Treinos Concluídos</h3>
            <p className="text-3xl font-bold text-blue-600">{userStats.completedWorkouts}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500 text-sm font-medium">Sequência</h3>
            <p className="text-3xl font-bold text-blue-600">{userStats.streak} dias</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500 text-sm font-medium">Nível</h3>
            <p className="text-3xl font-bold text-blue-600">{userStats.level}</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Evolução do Peso</h2>
            <Line options={chartOptions} data={weightData} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Evolução da Carga</h2>
            <Line options={chartOptions} data={strengthData} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ranking */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Ranking</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedRanking('daily')}
                    className={`px-4 py-2 rounded-lg ${
                      selectedRanking === 'daily'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Diário
                  </button>
                  <button
                    onClick={() => setSelectedRanking('monthly')}
                    className={`px-4 py-2 rounded-lg ${
                      selectedRanking === 'monthly'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Mensal
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {rankings[selectedRanking].map((rank, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      rank.name === 'Você' ? 'bg-blue-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-gray-400">#{rank.position}</span>
                      <span className="font-medium">{rank.name}</span>
                    </div>
                    <span className="font-bold text-blue-600">{rank.points} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Check-in para Treino */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar Treino</h2>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                Check-in para Treinar
              </button>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-8">
            {/* Notificações */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Notificações</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atividade dos Amigos */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Atividade dos Amigos</h2>
              <div className="space-y-4">
                {friendsActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">{activity.name}</span>{' '}
                        {activity.activity}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
