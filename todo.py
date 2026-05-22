Planner Code plan:
```python
def main():
    # 1. Activate necessary skills for web scraping and website generation
    activate_skill(skill_name="web-search-and-scrape")
    activate_skill(skill_name="website-generation")

    # 2. Scrape the Google Scholar profile to get comprehensive publication data and metrics
    # URL: https://scholar.google.com/citations?user=Cb3FEiAAAAAJ&hl=en
    scrape_webpage(url="https://scholar.google.com/citations?user=Cb3FEiAAAAAJ&hl=en")

    # 3. Scrape the existing Google Site to extract bio, teaching, and research context
    # URL: https://sites.google.com/view/rizwan-mushtaq/home
    scrape_webpage(url="https://sites.google.com/view/rizwan-mushtaq/home")

    # 4. Use GitHub integration to fetch the source code of the existing website to be updated
    # Repository: procourses/web (procourses.github.io/web/html/index.html)
    external_integration_execute_action(
        user_request="Get all file contents and structure from the GitHub repository 'procourses/web' to understand the current site implementation."
    )

    # 5. Process the gathered data and update the existing website files
    # Create/Update sections: Home, Research, Teaching, Publications, and Collaboration
    # Use the website-generation skill's core logic to rewrite the HTML/CSS/JS files
    # The tool will ensure the academic profile for Prof. Rizwan Mushtaq is professionally presented
    create_website(
        task="Update the existing website from 'procourses/web' with new content for Prof. Rizwan Mushtaq. Add tabs for Research, Teaching, Publications (using Scholar data), and Collaboration. Maintain the existing branding but enhance the layout for academic research profile standards."
    )

    # 6. Deploy the updated website and provide the URL to the user
    deploy_website(path="/home/sandbox/updated_site")

if __name__ == "__main__":
    main()
```