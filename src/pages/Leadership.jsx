import PageHero from '../components/PageHero';
import TeamMemberCard from '../components/TeamMemberCard';
import './About.css';

const team = [
  { name: 'Emmanuel Johnson', role: 'Managing Director', bio: 'Over 20 years of experience in concrete manufacturing and construction supply chain management.', image: '/images/team/george.jpg' },
  { name: 'Sarah Mensah', role: 'Operations Director', bio: 'Specialist in production optimization and quality systems implementation.', image: '/images/team/hope.jpg' },
  { name: 'James Osei', role: 'Technical Manager', bio: 'Civil engineer with expertise in concrete technology and product development.', image: '/images/team/joel.jpg' },
  { name: 'Grace Ankrah', role: 'Commercial Director', bio: 'Leading business development and client relations across institutional projects.' },
];

export default function Leadership() {
  return (
    <div className="page">
      <PageHero title="Leadership" description="Our management team brings decades of combined experience in concrete manufacturing, engineering, and project delivery." bgImage="/images/hero/paving-hero.jpg" />

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {team.map((member, i) => (
              <TeamMemberCard
                key={i}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
