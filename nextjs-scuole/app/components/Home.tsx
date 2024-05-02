import Schools from '../components/Schools'

const schools: School[] = [
    {
        name: 'School 1',
        description: 'This is school 1',
        address: 'Address 1',
        video: 'video1.mp4'
    },
    {
        name: 'School 2',
        description: 'This is school 2',
        address: 'Address 2',
        video: 'video2.mp4'
    }
]

const HomePage = () => {
  return <Schools schools={schools} />
}

export default HomePage