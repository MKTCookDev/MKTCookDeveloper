import { useState } from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Edit, Trash2, Plus, BarChart3 } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses'>('overview');

  // Mock admin data
  const stats = {
    totalStudents: 10234,
    totalCourses: 6,
    totalRevenue: 245680,
    activeEnrollments: 5432
  };

  const revenueData = [
    { month: 'Ene', revenue: 18500, students: 850 },
    { month: 'Feb', revenue: 22300, students: 1020 },
    { month: 'Mar', revenue: 25100, students: 1180 },
    { month: 'Abr', revenue: 28900, students: 1350 },
    { month: 'May', revenue: 31200, students: 1490 },
    { month: 'Jun', revenue: 34500, students: 1620 }
  ];

  const coursePerformance = coursesData.map(course => ({
    name: course.title.split(' ').slice(0, 3).join(' '),
    students: course.studentsCount,
    rating: course.rating
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#15313D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Panel Administrativo</h1>
          <p className="text-lg text-[#C6C6C6]">
            Gestiona cursos, estudiantes y analiza el rendimiento de la plataforma
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[#C6C6C6]/30">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-6 transition-colors ${
              activeTab === 'overview'
                ? 'text-[#15313D] border-b-2 border-[#FFC789]'
                : 'text-[#2F505E] hover:text-[#15313D]'
            }`}
          >
            Vista General
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-4 px-6 transition-colors ${
              activeTab === 'courses'
                ? 'text-[#15313D] border-b-2 border-[#FFC789]'
                : 'text-[#2F505E] hover:text-[#15313D]'
            }`}
          >
            Gestión de Cursos
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-[#65A5C0]/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-[#65A5C0]" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl text-[#15313D] mb-1">
                  {stats.totalStudents.toLocaleString()}
                </p>
                <p className="text-[#2F505E] text-sm">Total Estudiantes</p>
              </div>

              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-[#FFC789]/10 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#FFC789]" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl text-[#15313D] mb-1">{stats.totalCourses}</p>
                <p className="text-[#2F505E] text-sm">Cursos Activos</p>
              </div>

              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-[#2F505E]/10 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-[#2F505E]" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl text-[#15313D] mb-1">
                  ${(stats.totalRevenue / 1000).toFixed(0)}K
                </p>
                <p className="text-[#2F505E] text-sm">Ingresos Totales</p>
              </div>

              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-[#65A5C0]/10 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-[#65A5C0]" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl text-[#15313D] mb-1">
                  {stats.activeEnrollments.toLocaleString()}
                </p>
                <p className="text-[#2F505E] text-sm">Inscripciones Activas</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6">
                <h3 className="text-xl text-[#15313D] mb-6">Ingresos Mensuales</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#C6C6C6" />
                    <XAxis dataKey="month" stroke="#2F505E" />
                    <YAxis stroke="#2F505E" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #C6C6C6',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#FFC789"
                      strokeWidth={3}
                      name="Ingresos ($)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Students Chart */}
              <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6">
                <h3 className="text-xl text-[#15313D] mb-6">Nuevos Estudiantes</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#C6C6C6" />
                    <XAxis dataKey="month" stroke="#2F505E" />
                    <YAxis stroke="#2F505E" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #C6C6C6',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="students" fill="#65A5C0" name="Estudiantes" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Course Performance */}
            <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6">
              <h3 className="text-xl text-[#15313D] mb-6">Rendimiento por Curso</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coursePerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#C6C6C6" />
                  <XAxis dataKey="name" stroke="#2F505E" />
                  <YAxis stroke="#2F505E" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #C6C6C6',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="students" fill="#FFC789" name="Estudiantes" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#15313D]">Gestión de Cursos</h2>
              <button className="flex items-center gap-2 bg-[#FFC789] text-[#15313D] px-6 py-3 rounded-lg hover:bg-[#ffd5a3] transition-colors">
                <Plus className="w-5 h-5" />
                Nuevo Curso
              </button>
            </div>

            <div className="bg-white border border-[#C6C6C6]/30 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#2F505E] text-white">
                    <tr>
                      <th className="text-left px-6 py-4">Curso</th>
                      <th className="text-left px-6 py-4">Instructor</th>
                      <th className="text-left px-6 py-4">Estudiantes</th>
                      <th className="text-left px-6 py-4">Rating</th>
                      <th className="text-left px-6 py-4">Precio</th>
                      <th className="text-left px-6 py-4">Estado</th>
                      <th className="text-center px-6 py-4">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C6C6C6]/30">
                    {coursesData.map((course, index) => (
                      <tr
                        key={course.id}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-[#C6C6C6]/5'}
                      >
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <p className="text-[#15313D] line-clamp-1">{course.title}</p>
                            <p className="text-xs text-[#2F505E]">{course.category}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#2F505E]">
                          {course.instructor}
                        </td>
                        <td className="px-6 py-4 text-[#15313D]">
                          {course.studentsCount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <span className="text-[#15313D]">{course.rating}</span>
                            <span className="text-[#FFC789]">★</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#15313D]">
                          ${course.price}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 bg-[#65A5C0]/10 text-[#2F505E] rounded-full text-xs">
                            Activo
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              className="p-2 text-[#65A5C0] hover:bg-[#65A5C0]/10 rounded-lg transition-colors"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Eliminar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
