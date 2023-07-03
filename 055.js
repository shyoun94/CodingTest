//55번 하노이 탑
function hanoiTower(numDisks, start, temp, end) {
  if (numDisks === 1) {
    console.log(`Move disk 1 from ${start} to ${end}`);
    return;
  }

  hanoiTower(numDisks - 1, start, end, temp);
  console.log(`Move disk ${numDisks} from ${start} to ${end}`);
  hanoiTower(numDisks - 1, temp, start, end);
}


hanoiTower(5, 'A', 'B', 'C');
