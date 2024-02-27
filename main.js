db.createCollection("academic_records", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["studentID", "name", "grades", "subjects"],
            properties: {
                studentID: {
                    bsonType: "int",
                    description: "Student ID"
                },
                name: {
                    bsonType: "string",
                    description: "Student Name"
                },
                grades: {
                    bsonType: "object",
                    description: "Grades",
                    additionalProperties: {
                        bsonType: "string"
                    }
                },
                subjects: {
                    bsonType: "array",
                    description: "Subjects",
                    items: {
                        bsonType: "string"
                    }
                }
            
            }
        }
    }
})

db.createCollection("co_curricular_activities", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["studentID", "name", "activityType", "duration"],
            properties: {
                studentID: {
                    bsonType: "int",
                    description: "Student ID"
                },
                name: {
                    bsonType: "string",
                    description: "Student Name"
                },
                activityType: {
                    bsonType: "string",
                    description: "Activity Type"
                },
                duration: {
                    bsonType: "int",
                    description: "Duration (in hours)"
                },
                achievements: {
                    bsonType: "string",
                    description: "Achievements"
                }
            }
        }
    }
})

db.academic_records.insert({
    studentID: 1,
    name: "John Doe",
    grades: { math: "A", science: "B", history: "C" },
    subjects: ["math", "science", "history"]
})

db.co_curricular_activities.insert({
    studentID: 1,
    name: "John Doe",
    activityType: "Sports",
    duration: 50,
    achievements: "Won the inter-school basketball tournament"
})

// Read operation
db.academic_records.find({ studentID: 1 })

// Update operation
db.academic_records.update({ studentID: 1 }, { $set: { grades: { math: "A", science: "A", history: "B" } } })

// Delete operation
db.co_curricular_activities.remove({ studentID: 1 })


