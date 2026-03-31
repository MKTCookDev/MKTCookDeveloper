import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Filter, Star, Clock, Users } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', ...Array.from(new Set(coursesData.map(c => c.category)))];
  const levels = ['all', 'Principiante', 'Intermedio', 'Avanzado'];

  const courseImages = [
    'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzcwNzgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760383710574-73f43fd3370d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDcwNjIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1599110906471-54c8ba535658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZW1haWwlMjBuZXdzbGV0dGVyfGVufDF8fHx8MTc3MDc4MDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYW5hbHl0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3ODA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#15313D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            Catálogo de Cursos
          </h1>
          <p className="text-lg text-[#C6C6C6] max-w-2xl">
            Descubre nuestra colección completa de cursos especializados en marketing culinario
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-[#C6C6C6]/30 rounded-xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#15313D]" />
                <h3 className="text-lg text-[#15313D]">Filtros</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm text-[#2F505E] mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2F505E]" />
                  <input
                    type="text"
                    placeholder="Buscar cursos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#C6C6C6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65A5C0]"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm text-[#2F505E] mb-2">Categoría</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#FFC789] text-[#15313D]'
                          : 'text-[#2F505E] hover:bg-[#C6C6C6]/20'
                      }`}
                    >
                      {category === 'all' ? 'Todas' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm text-[#2F505E] mb-2">Nivel</label>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedLevel === level
                          ? 'bg-[#65A5C0] text-white'
                          : 'text-[#2F505E] hover:bg-[#C6C6C6]/20'
                      }`}
                    >
                      {level === 'all' ? 'Todos' : level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[#2F505E]">
                Mostrando <span className="text-[#15313D]">{filteredCourses.length}</span> cursos
              </p>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#2F505E] text-lg">No se encontraron cursos con los filtros seleccionados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group border border-[#C6C6C6]/20"
                  >
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={courseImages[index % courseImages.length]}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-[#FFC789] text-[#15313D] px-4 py-2 rounded-full shadow-lg">
                        ${course.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-[#65A5C0]/10 text-[#2F505E] px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                        <div className="flex items-center gap-1 text-[#FFC789]">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-[#15313D]">{course.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl text-[#15313D] mb-2 line-clamp-2 min-h-[3.5rem]">
                        {course.title}
                      </h3>

                      <p className="text-[#2F505E] text-sm mb-4 line-clamp-2">
                        {course.shortDescription}
                      </p>

                      <div className="flex items-center justify-between text-sm text-[#2F505E] mb-4 pb-4 border-b border-[#C6C6C6]/30">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.studentsCount}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#2F505E] mb-3">
                        Por {course.instructor}
                      </p>

                      <Link
                        to={`/course/${course.id}`}
                        className="block w-full text-center bg-[#15313D] text-white py-3 rounded-lg hover:bg-[#2F505E] transition-colors"
                      >
                        Ver Curso
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}