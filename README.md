# Github Search

### Links

[Demo](https://github.jponc.io)

[CI/CD Pipeline](https://github.com/jponc/github-react/actions)

### Thought Process

1. Bootstrapped project with CRA with TypeScript
2. Removed unnecessary files and used my personal file structure
3. Added material-ui so it'll look nice somehow
4. Added router (Maybe not necessary but it opens an opportunity to extend the project)
5. Added global app layout
6. Implemented search bar using controlled component with onSearch callback
7. Check how to use Github API
8. Added Repository and Owner to types
9. Added ability to fetch repositories via Github Search API
10. Added repositories as part of the global app context
11. Added fetch repositories initially as part of the layout
12. Added styling for repository card
13. Display different badges
14. Extracted useQuery to a hook and move querying logic to ListScreen
15. Added progress bar
16. Added basic tests to components
17. Added error handling when the user exceeded the rate limit
18. Added cloufront distribution
19. Setup Github actions

### Future Plans
1. Implement infinite scrolling/pagination, can easily be done by adding page as part of query params
2. Fix potential race conditions if I implemented search-as-you type.
  - One potential way to fix this is to add a check if it's the last promise, then use the value of that
  - Another way is to use RxJS but I haven't explored this library yet. But I've seen really good reviews about it
    especially the observables pattern.

