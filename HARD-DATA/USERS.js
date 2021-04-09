const coaches = [
  {
    id: '123',
    name: 'Juan',
    assignedRecruiters: ['abc', 'def'],
    rol: ['coach'],
  },
  {
    id: '456',
    name: 'Jose',
    assignedRecruiters: ['ghi'],
    rol: ['coach'],
  },
  {
    id: '789',
    name: 'Pepe',
    assignedRecruiters: ['jkl', , 'mno'],
    rol: ['coach'],
  },
  {
    id: '101112',
    name: 'Miguel',
    assignedRecruiters: ['pqr'],
    rol: ['coach'],
  },
]

const principals = [
  {
    id: '1',
    name: 'Juan',
    assignedCoaches: ['123', '456', '789'],
    rol: ['principal'],
  },
  {
    id: '2',
    name: 'Jose',
    assignedCoaches: ['789', '101112'],
    rol: ['principal'],
  },
]

const recruiters = [
  {
    id: 'abc',
    name: 'Juan',
    candidates: ['1'],
    rol: ['recruiter'],
  },
  {
    id: 'def',
    name: 'Jose',
    candidates: ['2'],
    rol: ['recruiter'],
  },
  {
    id: 'ghi',
    name: 'Alberto',
    candidates: ['2', '3'],
    rol: ['recruiter'],
  },
  {
    id: 'jkl',
    name: 'Miguel',
    candidates: ['4', '5'],
    rol: ['recruiter'],
  },
  {
    id: 'mno',
    name: 'Manuel',
    candidates: ['6'],
    rol: ['recruiter'],
  },
  {
    id: 'pqr',
    name: 'Luis',
    candidates: ['7'],
    rol: ['recruiter'],
  },
]
export default [...coaches, ...principals, ...recruiters]
