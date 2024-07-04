// Use the destructuring syntax to enhance the following code

var data = {
    title: 'Developer',
    skills: ['JavaScript', 'React', 'Node.js'],
    details: {
      experience: 5,
      location: 'Remote'
    }
  };
  
  // Extracting properties manually
  var title = data.title;
  var primarySkill = data.skills[0];
  var otherSkills = data.skills.slice(1);
  var experience = data.details.experience;
  var location = data.details.location;
  
  const { 
    title, 
    skills: [primarySkill, ...otherSkills], 
    details: { experience, location } 
  } = data;
  
  console.log(title); 
  console.log(primarySkill); 
  console.log(otherSkills); 
  console.log(experience); 
  console.log(location); 
  