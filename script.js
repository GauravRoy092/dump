// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with JavaScript ES6",
        excerpt: "Learn the essential features of ES6 that every developer should know, including arrow functions, destructuring, and modules.",
        category: "tech",
        date: "March 15, 2024",
        readTime: "5 min read",
        content: `
            <p>JavaScript ES6 (ECMAScript 2015) introduced many powerful features that have revolutionized how we write JavaScript. In this comprehensive guide, we'll explore the most important features you need to know.</p>
            
            <h3>Arrow Functions</h3>
            <p>Arrow functions provide a more concise way to write functions and automatically bind the 'this' context. They're perfect for callbacks and functional programming patterns.</p>
            
            <h3>Destructuring</h3>
            <p>Destructuring allows you to extract values from arrays and objects in a clean, readable way. This feature significantly reduces the amount of code needed for common operations.</p>
            
            <h3>Template Literals</h3>
            <p>Template literals make string interpolation much easier and more readable. You can embed expressions directly in strings using the \${} syntax.</p>
            
            <p>These features, along with many others, make modern JavaScript more powerful and enjoyable to work with. Start incorporating them into your projects today!</p>
        `
    },
    {
        id: 2,
        title: "The Art of Minimalist Living",
        excerpt: "Discover how embracing minimalism can lead to a more fulfilling and stress-free lifestyle.",
        category: "lifestyle",
        date: "March 12, 2024",
        readTime: "7 min read",
        content: `
            <p>Minimalism isn't just about having fewer possessions—it's about making room for what truly matters in your life. This philosophy can transform not just your living space, but your entire approach to life.</p>
            
            <h3>Starting Your Minimalist Journey</h3>
            <p>Begin by identifying what adds value to your life and what simply takes up space. This process of evaluation helps you understand your true priorities and values.</p>
            
            <h3>Benefits of Minimalist Living</h3>
            <p>Living with less can lead to reduced stress, increased focus, better financial health, and more time for experiences that matter. Many people find that minimalism helps them appreciate what they have more deeply.</p>
            
            <h3>Practical Tips</h3>
            <p>Start small with one room or even one drawer. The key is consistency and patience with yourself as you develop new habits and ways of thinking about your possessions.</p>
        `
    },
    {
        id: 3,
        title: "Hidden Gems of Southeast Asia",
        excerpt: "Explore breathtaking destinations off the beaten path in Southeast Asia that offer authentic cultural experiences.",
        category: "travel",
        date: "March 10, 2024",
        readTime: "8 min read",
        content: `
            <p>Southeast Asia is full of incredible destinations that go far beyond the typical tourist hotspots. These hidden gems offer authentic experiences and breathtaking beauty without the crowds.</p>
            
            <h3>Luang Prabang, Laos</h3>
            <p>This UNESCO World Heritage city offers a perfect blend of French colonial architecture and traditional Lao culture. The morning alms ceremony and stunning waterfalls nearby make it truly special.</p>
            
            <h3>Hoi An, Vietnam</h3>
            <p>While becoming more popular, Hoi An still retains its charm with ancient architecture, incredible street food, and skilled artisans. The lantern festival is particularly magical.</p>
            
            <h3>Raja Ampat, Indonesia</h3>
            <p>For diving enthusiasts, Raja Ampat offers some of the world's most biodiverse marine life. The remote location means pristine reefs and unforgettable underwater experiences.</p>
        `
    },
    {
        id: 4,
        title: "Building Responsive Web Designs",
        excerpt: "Master the principles of responsive design to create websites that work beautifully on all devices.",
        category: "tech",
        date: "March 8, 2024",
        readTime: "6 min read",
        content: `
            <p>Responsive web design is no longer optional—it's essential. With users accessing websites from countless device types and screen sizes, your designs must adapt seamlessly.</p>
            
            <h3>Mobile-First Approach</h3>
            <p>Starting your design process with mobile devices ensures that your core content and functionality work well on smaller screens, then progressively enhance for larger displays.</p>
            
            <h3>Flexible Grid Systems</h3>
            <p>CSS Grid and Flexbox provide powerful tools for creating layouts that adapt to different screen sizes. Understanding when to use each is key to effective responsive design.</p>
            
            <h3>Performance Considerations</h3>
            <p>Responsive design isn't just about layout—it's also about performance. Optimize images, use appropriate font sizes, and consider touch interactions for the best user experience.</p>
        `
    },
    {
        id: 5,
        title: "Morning Routines That Transform Your Day",
        excerpt: "Discover powerful morning habits that successful people use to start their days with purpose and energy.",
        category: "lifestyle",
        date: "March 5, 2024",
        readTime: "5 min read",
        content: `
            <p>How you start your morning sets the tone for your entire day. A well-crafted morning routine can boost your productivity, improve your mood, and help you achieve your goals more effectively.</p>
            
            <h3>The Power of Consistency</h3>
            <p>The most effective morning routines are consistent and sustainable. It's better to have a simple routine you can stick to than an elaborate one you abandon after a week.</p>
            
            <h3>Key Elements to Consider</h3>
            <p>Successful morning routines often include elements like hydration, movement, mindfulness, and planning. Find the combination that works best for your lifestyle and goals.</p>
            
            <h3>Making It Stick</h3>
            <p>Start small and gradually build your routine. Track your progress and be patient with yourself as you develop these new habits. Remember, it takes time to see the full benefits.</p>
        `
    },
    {
        id: 6,
        title: "Photography Tips for Travelers",
        excerpt: "Capture stunning travel memories with these essential photography techniques and composition tips.",
        category: "travel",
        date: "March 3, 2024",
        readTime: "7 min read",
        content: `
            <p>Great travel photography is about more than just having expensive equipment—it's about seeing the world with a creative eye and understanding how to capture the essence of a place.</p>
            
            <h3>Understanding Light</h3>
            <p>The golden hours just after sunrise and before sunset provide the most flattering light for photography. Learn to work with natural light to create mood and atmosphere in your images.</p>
            
            <h3>Composition Techniques</h3>
            <p>The rule of thirds, leading lines, and framing are fundamental composition techniques that can dramatically improve your photos. Practice these until they become second nature.</p>
            
            <h3>Telling Stories</h3>
            <p>The best travel photos tell stories about the places you visit and the people you meet. Look for moments that capture the culture, emotions, and unique character of your destinations.</p>
        `
    }
];

// Global variables
let currentPosts = [...blogPosts];
let displayedPosts = 3;
let currentFilter = 'all';
let editingPostId = null;
let nextPostId = Math.max(...blogPosts.map(p => p.id)) + 1;

// Initialize the blog
function initBlog() {
    displayPosts();
    setupSearch();
    setupEventListeners();
}

// Display posts in the grid
function displayPosts() {
    const grid = document.getElementById('blogGrid');
    const postsToShow = currentPosts.slice(0, displayedPosts);
    
    grid.innerHTML = postsToShow.map(post => `
        <article class="blog-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden fade-in" data-category="${post.category}">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">${post.category}</span>
                    <span class="text-gray-500 text-sm">${post.readTime}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">${post.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">${post.excerpt}</p>
                <div class="flex items-center justify-between">
                    <span class="text-gray-500 text-sm">${post.date}</span>
                    <div class="flex gap-2">
                        <button onclick="openPost(${post.id})" class="text-blue-600 hover:text-blue-800 font-medium transition-colors">Read More →</button>
                        <button onclick="editPost(${post.id})" class="text-green-600 hover:text-green-800 font-medium transition-colors">Edit</button>
                        <button onclick="deletePost(${post.id})" class="text-red-600 hover:text-red-800 font-medium transition-colors">Delete</button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// Filter posts by category
function filterPosts(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');
    
    // Filter posts
    if (category === 'all') {
        currentPosts = [...blogPosts];
    } else {
        currentPosts = blogPosts.filter(post => post.category === category);
    }
    
    displayedPosts = 3;
    displayPosts();
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            currentPosts = currentFilter === 'all' ? [...blogPosts] : blogPosts.filter(post => post.category === currentFilter);
        } else {
            const filteredByCategory = currentFilter === 'all' ? blogPosts : blogPosts.filter(post => post.category === currentFilter);
            currentPosts = filteredByCategory.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm)
            );
        }
        
        displayedPosts = Math.min(currentPosts.length, 3);
        displayPosts();
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close modals when clicking outside
    document.getElementById('postModal').addEventListener('click', (e) => {
        if (e.target.id === 'postModal') {
            closeModal();
        }
    });

    document.getElementById('editModal').addEventListener('click', (e) => {
        if (e.target.id === 'editModal') {
            closeEditModal();
        }
    });

    // Handle form submission
    document.getElementById('postForm').addEventListener('submit', handleFormSubmit);
}

// Load more posts
function loadMorePosts() {
    displayedPosts = Math.min(displayedPosts + 3, currentPosts.length);
    displayPosts();
}

// Open post in modal
function openPost(postId) {
    let post;
    
    if (postId === 'featured') {
        post = {
            title: "The Future of Web Development",
            date: "March 18, 2024",
            category: "tech",
            content: `
                <p>The web development landscape is evolving at an unprecedented pace. From artificial intelligence integration to new frameworks and tools, developers today have more opportunities than ever to create amazing digital experiences.</p>
                
                <h3>AI-Powered Development</h3>
                <p>Artificial intelligence is revolutionizing how we write code, debug applications, and optimize performance. Tools like GitHub Copilot and ChatGPT are becoming essential parts of the developer toolkit.</p>
                
                <h3>The Rise of Edge Computing</h3>
                <p>Edge computing is bringing processing power closer to users, resulting in faster load times and better user experiences. This shift is changing how we think about application architecture.</p>
                
                <h3>WebAssembly and Performance</h3>
                <p>WebAssembly is enabling near-native performance in web applications, opening up new possibilities for complex applications that were previously only possible as desktop software.</p>
                
                <h3>The Future is Bright</h3>
                <p>As we look ahead, the future of web development is filled with exciting possibilities. The key is to stay curious, keep learning, and embrace the changes that will shape our industry.</p>
            `
        };
    } else {
        post = blogPosts.find(p => p.id === postId);
    }
    
    if (post) {
        document.getElementById('modalTitle').textContent = post.title;
        document.getElementById('modalDate').textContent = post.date;
        document.getElementById('modalCategory').textContent = post.category;
        document.getElementById('modalContent').innerHTML = post.content;
        document.getElementById('postModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal() {
    document.getElementById('postModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// CRUD Operations
function openCreateModal() {
    editingPostId = null;
    document.getElementById('editModalTitle').textContent = 'Create New Post';
    document.getElementById('postForm').reset();
    document.getElementById('editModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function editPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    editingPostId = postId;
    document.getElementById('editModalTitle').textContent = 'Edit Post';
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postExcerpt').value = post.excerpt;
    document.getElementById('postCategory').value = post.category;
    document.getElementById('postReadTime').value = post.readTime;
    document.getElementById('postContent').value = post.content;
    document.getElementById('editModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
        const index = blogPosts.findIndex(p => p.id === postId);
        if (index !== -1) {
            blogPosts.splice(index, 1);
            
            // Update current posts based on filter
            if (currentFilter === 'all') {
                currentPosts = [...blogPosts];
            } else {
                currentPosts = blogPosts.filter(post => post.category === currentFilter);
            }
            
            // Adjust displayed posts if necessary
            displayedPosts = Math.min(displayedPosts, currentPosts.length);
            displayPosts();
            
            showNotification('Post deleted successfully!', 'success');
        }
    }
}

function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    editingPostId = null;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const postData = {
        title: formData.get('title'),
        excerpt: formData.get('excerpt'),
        category: formData.get('category'),
        readTime: formData.get('readTime'),
        content: formData.get('content'),
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    };

    if (editingPostId) {
        // Update existing post
        const index = blogPosts.findIndex(p => p.id === editingPostId);
        if (index !== -1) {
            blogPosts[index] = { ...blogPosts[index], ...postData };
            showNotification('Post updated successfully!', 'success');
        }
    } else {
        // Create new post
        const newPost = {
            id: nextPostId++,
            ...postData
        };
        blogPosts.unshift(newPost); // Add to beginning of array
        showNotification('Post created successfully!', 'success');
    }

    // Update current posts based on filter
    if (currentFilter === 'all') {
        currentPosts = [...blogPosts];
    } else {
        currentPosts = blogPosts.filter(post => post.category === currentFilter);
    }

    displayPosts();
    closeEditModal();
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transition-all transform translate-x-full ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize the blog when page loads
document.addEventListener('DOMContentLoaded', initBlog);