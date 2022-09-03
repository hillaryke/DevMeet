export const getUserRepos = async (githubUsername: string) => {
   const response = await fetch(`https://api.github.com/users/${githubUsername}
                     /repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENTID}
                     &client_secret=${process.env.GITHUB_SECRET}`
   );
   if (response.status !== 200) {
      return { repos: null };
   }
   return { repos: await response.json() };
};