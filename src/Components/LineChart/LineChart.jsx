import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "name": "Alice", "mathMarks": 65, "physicsMarks": 72, "chemistryMarks": 68 },
        { "id": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 81, "chemistryMarks": 79 },
        { "id": 3, "name": "Charlie", "mathMarks": 82, "physicsMarks": 76, "chemistryMarks": 84 },
        { "id": 4, "name": "David", "mathMarks": 91, "physicsMarks": 88, "chemistryMarks": 92 },
        { "id": 5, "name": "Eve", "mathMarks": 74, "physicsMarks": 85, "chemistryMarks": 78 },
        { "id": 6, "name": "Frank", "mathMarks": 88, "physicsMarks": 80, "chemistryMarks": 85 },
        { "id": 7, "name": "Grace", "mathMarks": 70, "physicsMarks": 77, "chemistryMarks": 73 },
        { "id": 8, "name": "Hannah", "mathMarks": 95, "physicsMarks": 91, "chemistryMarks": 94 },
        { "id": 9, "name": "Ian", "mathMarks": 85, "physicsMarks": 82, "chemistryMarks": 87 },
        { "id": 10, "name": "Jack", "mathMarks": 76, "physicsMarks": 79, "chemistryMarks": 74 }
      ]
      
      
    return (
        <div className=''>
            <LChart width={500} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='blue'></Line>
                <Line dataKey="physicsMarks" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;