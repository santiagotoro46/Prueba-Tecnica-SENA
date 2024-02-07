

export const getTitle = () => {

  if(location.pathname === '/series') {
    return 'Popular Series';
  } else if(location.pathname === '/movies') {
    return 'Popular Movies';
  } else {
    return 'Popular Titles';
  }
      
}

