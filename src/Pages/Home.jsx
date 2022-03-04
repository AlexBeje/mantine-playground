// My components
import MyButton from '/src/Components/MyButton';

// Utils
import ThemeToggle from '/src/Utils/ThemeToggle';

function Home() {
  const spaceBetween = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={spaceBetween}>
      <MyButton>Hello</MyButton>
      World!
      <ThemeToggle />
    </div>
  );
}

export default Home;
