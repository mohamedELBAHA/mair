fetch('researchers_en.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('researcher-container');
    data.forEach((r, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${index * 100}ms`;
      card.innerHTML = `
        <img class="photo" src="${r.photo}" alt="${r.name}" />
        <div class="name">${r.name}</div>
        <div class="position">${r.position}<br><small>${r.affiliation}</small></div>
        <div class="tags">
          ${r.interests.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="links">
          ${r.scholar ? `<a href="${r.scholar}" target="_blank" title="Google Scholar">📘</a>` : ''}
          ${r.linkedin ? `<a href="${r.linkedin}" target="_blank" title="LinkedIn">🔗</a>` : ''}
          ${r.website ? `<a href="${r.website}" target="_blank" title="Website">🌐</a>` : ''}
          ${r.twitter ? `<a href="${r.twitter}" target="_blank" title="Twitter">🐦</a>` : ''}
        </div>
      `;
      container.appendChild(card);
    });
  });
