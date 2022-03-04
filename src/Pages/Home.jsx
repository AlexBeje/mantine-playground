// My components
import MyButton from '/src/Components/MyButton';
// Utils
import ThemeToggle from '/src/Utils/ThemeToggle';

export default function Home() {
  return (
    <>
      <div style={spaceBetween}>
        <MyButton>Hello</MyButton>
        <span>World!</span>
        <ThemeToggle />
      </div>
    </>
  );
}

// Styles
const spaceBetween = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
