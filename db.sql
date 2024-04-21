CREATE TABLE images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO images (filename, description) VALUES
('img1.jpg', 'Description for Image 1'),
('img2.jpg', 'Description for Image 2'),
('img3.jpg', 'Description for Image 3'),
('img4.jpg', 'Description for Image 4');

