import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const GithubStats = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract GitHub username
  const githubUrl = personalInfo.socials.github;
  const githubUsername = githubUrl.substring(githubUrl.lastIndexOf('/') + 1) || 'shailendramani';

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const profileRes = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!profileRes.ok) throw new Error("Profile fetch failed");
        const profileData = await profileRes.json();
        setProfile(profileData);

        const reposRes = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (err) {
        console.error("Github API error, using fallback state: ", err);
        // Fallback mock data in case of API rate limits
        setProfile({
          public_repos: 12,
          followers: 8,
          following: 10,
          bio: "Computer Science Student | Web Developer | AI Enthusiast"
        });
        setRepos([
          { name: "prayukti-v-lab", description: "Interactive Virtual Laboratory simulation tools for engineering practicals.", language: "JavaScript", html_url: `${githubUrl}/prayukti-v-lab` },
          { name: "caller-ai", description: "Automated event-driven voice calling agent powered by Twilio.", language: "JavaScript", html_url: `${githubUrl}/caller-ai` },
          { name: "yt-channel-analysis", description: "Python ETL system manipulating metrics from YouTube Data API.", language: "Python", html_url: `${githubUrl}/yt-channel-analysis` }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [githubUsername, githubUrl]);

  return (
    <section className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-blue/30 bg-accent-blue/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-blue font-bold mb-4">
            Open Source
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            GitHub Activities
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Profile Statistics Card */}
            <div data-aos="fade-right" className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 shadow-md flex flex-col justify-between hover:border-accent-blue/20 transition-all duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center text-accent-blue font-black text-xl font-display">
                    {personalInfo.firstName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-display text-white">{personalInfo.name}</h3>
                    <p className="text-xs text-gray-500 font-mono">@{githubUsername}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed italic mb-8">
                  "{profile?.bio || 'Building scalable web applications & ML solutions.'}"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 font-display">
                <div className="text-center">
                  <span className="block text-2xl font-black text-white">{profile?.public_repos || 0}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Repos</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-white">{profile?.followers || 0}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-black text-white">{profile?.following || 0}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Following</span>
                </div>
              </div>
            </div>

            {/* Repos Grid */}
            <div data-aos="fade-left" className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <a 
                  key={repo.name} 
                  href={repo.html_url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/[0.02] border border-white/5 hover:border-accent-emerald/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.04]"
                >
                  <div>
                    <h4 className="font-black font-display text-white hover:text-accent-blue transition-colors text-base break-words">
                      {repo.name}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2 line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  {repo.language && (
                    <span className="inline-block mt-4 text-[10px] font-mono font-bold text-accent-emerald uppercase tracking-wider">
                      ● {repo.language}
                    </span>
                  )}
                </a>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default GithubStats;
