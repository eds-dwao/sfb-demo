export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('header-container', 'd-flex', 'align-items-center');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('flex-grow-1');
      }
      if (d === 1) {
        div.classList.add('nav-links', 'd-flex', 'flex-grow-1', 'gap-4');
      }
      if (d === 2) {
        div.classList.add(
          'contact-info',
          'd-flex',
          'align-items-center',
          'gap-3'
        );
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p, i) => {
          p.classList.add('contact-link', 'contact-link-' + (i + 1));
        });
      }
    });
  });
}
