export default ([query, names, summaries, links]) => `
<h2>Searching for "${query}"</h2>
<ul class = "list-group">
        ${names.map(
          (name, i) => `
        <li class="list-group-item">
        <a href=${links[i]} target="_blank"><h4>${name}</h4></a>
        <p>${summaries[i]}</p>
        </li>
        `
        ).join('')}
</ul>
`;
