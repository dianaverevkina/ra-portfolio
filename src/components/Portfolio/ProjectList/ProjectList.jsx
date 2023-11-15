import './projectList.css';

export const ProjectList = ({ projects }) => {
  return (
    <div className='project-list'>
      {projects.map((project, index) => {
        return (
          <div key={index} className='project-list__item'>
            <img src={project.img} alt={project.category} />
          </div>
        );
      })}
    </div>
  )
}
